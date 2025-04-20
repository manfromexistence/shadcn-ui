import requests
import os
import shutil
from PIL import Image
import time

# Logo.dev publishable key
API_KEY = "pk_FC8xRbfOToi3EkF0LHFuDQ"

# Framework to domain mapping
FRAMEWORK_DOMAINS = {
    "react": "react.dev",
    "nextjs": "nextjs.org",
    "angular": "angular.dev",
    "vue": "vuejs.org",
    "nuxtjs": "nuxt.com",
    "svelte": "svelte.dev",
    "sveltekits": "kit.svelte.dev",
    "ember": "emberjs.com",
    "backbone": "backbonejs.org",
    "knockout": "knockoutjs.com",
    "alpine": "alpinejs.dev",
    "litelement": "lit.dev",
    "solid": "solidjs.com",
    "stencil": "stenciljs.com",
    "marko": "markojs.com",
    "mithril": "mithril.js.org",
    "hyperapp": "hyperapp.dev",
    "inferno": "infernojs.org",
    "aurelia": "aurelia.io",
    "polymer": "polymer-project.org",
    "dojo": "dojo.io",
    "sencha": "sencha.com",
    "qwik": "qwik.dev",
    "nue": "nuejs.org",
    "astro": "astro.build",
    "hono": "hono.dev",
    "express": "expressjs.com",
    "koa": "koajs.com",
    "nest": "nestjs.com",
    "fastify": "fastify.dev",
    "hapi": "hapi.dev",
    "django": "djangoproject.com",
    "flask": "flask.palletsprojects.com",
    "fastapi": "fastapi.tiangolo.com",
    "rails": "rubyonrails.org",
    "laravel": "laravel.com",
    "springboot": "spring.io",
    "aspnetcore": "dotnet.microsoft.com",
    "phoenix": "phoenixframework.org",
    "cakephp": "cakephp.org",
    "symfony": "symfony.com",
    "zend": "zend.com",
    "yii": "yiiframework.com",
    "codeigniter": "codeigniter.com",
    "slim": "slimframework.com",
    "lumen": "lumen.laravel.com",
    "meteor": "meteor.com",
    "adonisjs": "adonisjs.com",
    "feathersjs": "feathersjs.com",
    "strapi": "strapi.io",
    "loopback": "loopback.io",
    "flutter": "flutter.dev",
    "reactnative": "reactnative.dev",
    "ionic": "ionicframework.com",
    "xamarin": "dotnet.microsoft.com",
    "nativescript": "nativescript.org",
    "swiftui": "developer.apple.com",
    "jetpackcompose": "developer.android.com",
    "framework7": "framework7.io",
    "vuenative": "vue-native.io",
    "cordova": "cordova.apache.org",
    "jquerymobile": "jquerymobile.com",
    "mobileangularui": "mobileangularui.com",
    "coronasdk": "coronalabs.com",
    "swiftic": "swiftic.com",
    "onsenui": "onsen.io",
    "electron": "electronjs.org",
    "dotnetmaui": "dotnet.microsoft.com",
    "winui": "microsoft.com",
    "wpf": "dotnet.microsoft.com",
    "uwp": "microsoft.com",
    "qt": "qt.io",
    "gtk": "gtk.org",
    "javafx": "openjfx.io",
    "tauri": "tauri.app",
    "flutterdesktop": "flutter.dev",
    "reactnativewindows": "microsoft.github.io",
    "nwjs": "nwjs.io",
    "protonnative": "proton-native.js.org",
    "unity": "unity.com",
    "unreal": "unrealengine.com",
    "godot": "godotengine.org",
    "cocos2d": "cocos2d-x.org",
    "phaser": "phaser.io",
    "construct": "construct.net",
    "gamemaker": "yoyogames.com",
    "defold": "defold.com",
    "monogame": "monogame.net",
    "love2d": "love2d.org",
    "arkit": "developer.apple.com",
    "arcore": "developers.google.com",
    "vuforia": "vuforia.com",
    "aframe": "aframe.io",
    "threejs": "threejs.org",
    "babylonjs": "babylonjs.com",
    "sparkar": "sparkar.facebook.com",
    "lensstudio": "lensstudio.snapchat.com",
    "streamlit": "streamlit.io",
    "jupyter": "jupyter.org",
    "dash": "plotly.com",
    "gradio": "gradio.app",
    "panel": "panel.holoviz.org",
    "voila": "voila.readthedocs.io",
    "bokeh": "bokeh.org",
    "plotly": "plotly.com",
    "matplotlib": "matplotlib.org",
    "seaborn": "seaborn.pydata.org",
}

# Alternative domains to try for problematic frameworks
ALTERNATIVE_DOMAINS = {
    "react": ["reactjs.org", "facebook.github.io/react"],
    "nextjs": ["next.js.org", "vercel.com"],
    "angular": ["angular.io", "angularjs.org"],
    "vue": ["vue.org"],
    "nuxtjs": ["nuxtjs.org"],
}

# Output directory (relative to Next.js project)
OUTPUT_DIR = "public/icons"
FALLBACK_IMAGE = "public/icons/fallback.png"

# Ensure output directory exists
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# Ensure fallback image exists
if not os.path.exists(FALLBACK_IMAGE):
    # Create a minimal 300x300 gray square as fallback
    img = Image.new('RGB', (300, 300), color=(229, 231, 235))  # Gray color (#E5E7EB)
    img.save(FALLBACK_IMAGE)
    print(f"Created fallback image at {FALLBACK_IMAGE}")

def download_logo(framework: str, domain: str, retries: int = 3, backoff: float = 1.0):
    """Fetch and save logo for a given framework and domain with retries."""
    output_path = os.path.join(OUTPUT_DIR, f"{framework}.png")
    
    # Skip if logo already exists
    if os.path.exists(output_path):
        print(f"Logo already exists for {framework} ({domain}) at {output_path}")
        return True

    for attempt in range(retries):
        try:
            # Fetch logo from Logo.dev API with size 300x300
            api_url = f"https://img.logo.dev/{domain}?token={API_KEY}&size=300"
            response = requests.get(api_url, stream=True, timeout=10)
            response.raise_for_status()

            # Save logo to public/icons/{framework}.png
            with open(output_path, "wb") as f:
                shutil.copyfileobj(response.raw, f)

            print(f"Downloaded logo for {framework} ({domain}) to {output_path}")
            return True

        except requests.HTTPError as e:
            if e.response.status_code == 404:
                print(f"404 Error: No logo found for {framework} ({domain})")
                if framework in ALTERNATIVE_DOMAINS:
                    print(f"Suggested alternative domains: {ALTERNATIVE_DOMAINS[framework]}")
                shutil.copyfile(FALLBACK_IMAGE, output_path)
                return False
            else:
                print(f"HTTP Error downloading logo for {framework} ({domain}, attempt {attempt + 1}/{retries}): {e}")
        except requests.RequestException as e:
            print(f"Error downloading logo for {framework} ({domain}, attempt {attempt + 1}/{retries}): {e}")

        if attempt < retries - 1:
            time.sleep(backoff * (2 ** attempt))  # Exponential backoff

    print(f"Failed to download logo for {framework} ({domain}) after {retries} attempts, using fallback")
    shutil.copyfile(FALLBACK_IMAGE, output_path)
    return False

def main():
    """Download logos for all frameworks."""
    print("Starting logo download...")
    failed_downloads = []
    for framework, domain in FRAMEWORK_DOMAINS.items():
        success = download_logo(framework, domain)
        if not success:
            failed_downloads.append((framework, domain))
    
    print("Logo download complete.")
    if failed_downloads:
        print("\nFailed downloads (used fallback image):")
        for framework, domain in failed_downloads:
            print(f"- {framework} ({domain})")
            if framework in ALTERNATIVE_DOMAINS:
                print(f"  Try alternative domains: {ALTERNATIVE_DOMAINS[framework]}")
        print("\nPlease manually download logos for the above frameworks or update FRAMEWORK_DOMAINS with working domains.")

if __name__ == "__main__":
    main()