import {CorePalette} from '../palettes/core_palette';
import {Hct} from '../hct/hct';

/**
 * Represents a Shadcn theme, a mapping of design tokens to colors.
 */
export class SchemeShadcn {
  private props: Record<string, number>;
  
  /**
   * Create a Shadcn theme from a source color
   * @param sourceColorHct Source color as HCT
   * @param isDark Whether to generate a dark theme
   * @param contrastLevel Contrast level adjustment (not used currently)
   */
  constructor(sourceColorHct: Hct, isDark: boolean, contrastLevel: number) {
    // Create core palette from source color
    const core = CorePalette.of(sourceColorHct.toInt());
    this.props = {};
    
    if (isDark) {
      // Dark theme values - with more variation between elements
      
      // Surface colors with subtle variations
      this.props.background = core.n1.tone(6); // Slightly darker background 
      // Make foreground different from destructiveForeground
      this.props.foreground = core.n1.tone(99); // Brightest white text
      
      this.props.muted = core.n2.tone(14); // Slightly lighter than background
      this.props.mutedForeground = core.n2.tone(65); // Muted text
      
      this.props.popover = core.n1.tone(8); // Slightly lighter than background
      this.props.popoverForeground = core.n1.tone(96); // Same as foreground but slightly softer
      
      this.props.card = core.n1.tone(10); // Distinct from background and popover
      this.props.cardForeground = core.n1.tone(97); // Light text for cards
      
      // Borders and inputs with subtle variation
      this.props.border = core.n2.tone(18); // Softer border
      this.props.input = core.n2.tone(20); // Slightly more distinct for input fields
      
      // Primary color - use primary palette tone
      this.props.primary = core.a1.tone(80); // Bright primary for dark mode
      this.props.primaryForeground = core.a1.tone(12); // Dark on light primary
      
      // Secondary color - use secondary palette
      this.props.secondary = core.n2.tone(16); // Slightly lighter than background 
      this.props.secondaryForeground = core.n1.tone(90); // Slightly dimmer than card foreground
      
      // Accent color - use tertiary palette for more variety
      this.props.accent = core.a3.tone(30); // Distinct accent tone from tertiary palette
      this.props.accentForeground = core.a3.tone(92); // Light on accent
      
      // Destructive color - use error palette
      this.props.destructive = core.error.tone(65); // Bright error tone
      // Make destructiveForeground distinct from foreground
      this.props.destructiveForeground = core.a2.tone(95); // Slightly tinted light color from secondary palette
      
      // Ring should be distinct from primary for focus states
      this.props.ring = core.a1.tone(60); // Focus ring color - more visible
    } else {
      // Light theme values - with more variation between elements
      
      // Surface colors with subtle variations 
      this.props.background = core.n1.tone(100); // Pure white background
      this.props.foreground = core.n1.tone(7); // Dark text, not pure black
      
      this.props.muted = core.n2.tone(96); // Very light gray
      this.props.mutedForeground = core.n2.tone(40); // Medium gray text
      
      // Make popover distinct from card
      this.props.popover = core.n1.tone(100); // Pure white for popover
      this.props.popoverForeground = core.n1.tone(8); // Same as foreground
      
      // Make card distinct from popover
      this.props.card = core.n2.tone(98); // Very slightly tinted from neutral palette
      this.props.cardForeground = core.n1.tone(7); // Same as foreground
      
      // Borders and inputs with subtle variation
      this.props.border = core.n2.tone(90); // Light border
      this.props.input = core.n2.tone(88); // Slightly darker for input fields
      
      // Primary color - use primary palette tone
      this.props.primary = core.a1.tone(40); // Medium primary color for light mode
      this.props.primaryForeground = core.n1.tone(97); // Very light but not pure white
      
      // Secondary color - use secondary palette
      this.props.secondary = core.n2.tone(94); // Very light gray
      this.props.secondaryForeground = core.n1.tone(12); // Dark on secondary
      
      // Accent color - use tertiary palette for more variety
      this.props.accent = core.a3.tone(92); // Light accent from tertiary palette
      this.props.accentForeground = core.a3.tone(8); // Dark on accent
      
      // Destructive color - use error palette
      this.props.destructive = core.error.tone(55); // Medium error tone
      // Make destructiveForeground distinct from card
      this.props.destructiveForeground = core.n1.tone(95); // Very light but not the same as card
      
      // Ring should match primary for consistency
      this.props.ring = core.a1.tone(40); // Focus ring color same as primary
    }
  }

  // Getters for all the theme properties
  get background(): number { return this.props.background; }
  get foreground(): number { return this.props.foreground; }
  
  get muted(): number { return this.props.muted; }
  get mutedForeground(): number { return this.props.mutedForeground; }
  
  get popover(): number { return this.props.popover; }
  get popoverForeground(): number { return this.props.popoverForeground; }
  
  get card(): number { return this.props.card; }
  get cardForeground(): number { return this.props.cardForeground; }
  
  get border(): number { return this.props.border; }
  get input(): number { return this.props.input; }
  
  get primary(): number { return this.props.primary; }
  get primaryForeground(): number { return this.props.primaryForeground; }
  
  get secondary(): number { return this.props.secondary; }
  get secondaryForeground(): number { return this.props.secondaryForeground; }
  
  get accent(): number { return this.props.accent; }
  get accentForeground(): number { return this.props.accentForeground; }
  
  get destructive(): number { return this.props.destructive; }
  get destructiveForeground(): number { return this.props.destructiveForeground; }
  
  get ring(): number { return this.props.ring; }

  toJSON() {
    return {
      ...this.props
    };
  }

  /**
   * Convert ARGB int to HSL string in the format Shadcn UI expects (H S% L%)
   * Improved version to produce more visually pleasing colors
   */
  static toHslString(argb: number): string {
    // Convert ARGB to HSL
    const hct = Hct.fromInt(argb);
    
    // Get HSL values - approximated from HCT
    const hue = Math.round(hct.hue);
    
    // Map chroma to saturation more naturally
    // Higher chroma for tone ranges that look better with more saturation
    let saturation: number;
    const tone = hct.tone;
    
    // Adjust saturation based on tone ranges
    if (tone > 90) {
      // Very light colors - lower saturation to avoid washing out
      saturation = Math.round((hct.chroma / 150) * 60);
    } else if (tone < 15) {
      // Very dark colors - moderate saturation to maintain richness
      saturation = Math.round((hct.chroma / 150) * 70);
    } else if (tone >= 40 && tone <= 60) {
      // Mid-tones - can handle higher saturation
      saturation = Math.round((hct.chroma / 150) * 100);
    } else {
      // Other tones - standard saturation mapping
      saturation = Math.round((hct.chroma / 150) * 85);
    }
    
    // Cap saturation to avoid extreme values
    saturation = Math.min(saturation, 95);
    
    // For grays, ensure very low saturation
    if (hct.chroma < 8) {
      saturation = Math.min(5, saturation);
    }
    
    // Map tone to lightness
    const lightness = Math.round(hct.tone);
    
    return `${hue} ${saturation}% ${lightness}%`;
  }
}
