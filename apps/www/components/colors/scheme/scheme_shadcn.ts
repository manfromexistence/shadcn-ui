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
      // Dark theme values - based on dark section in themes.css
      this.props.background = core.n1.tone(8); // Dark background (~4-10% tone)
      this.props.foreground = core.n1.tone(98); // Light text (~98% tone)
      
      this.props.muted = core.n2.tone(15); // Slightly lighter than background
      this.props.mutedForeground = core.n2.tone(65); // Muted text
      
      this.props.popover = core.n1.tone(8); // Same as background
      this.props.popoverForeground = core.n1.tone(98); // Same as foreground
      
      this.props.card = core.n1.tone(8); // Same as background
      this.props.cardForeground = core.n1.tone(98); // Same as foreground
      
      this.props.border = core.n2.tone(18); // Slightly lighter than background
      this.props.input = core.n2.tone(18); // Same as border
      
      this.props.primary = core.a1.tone(90); // Light primary color for dark mode
      this.props.primaryForeground = core.a1.tone(15); // Dark on light primary
      
      this.props.secondary = core.n2.tone(18); // Slightly lighter than background
      this.props.secondaryForeground = core.n1.tone(98); // Same as foreground
      
      this.props.accent = core.a2.tone(20); // Subtle accent color
      this.props.accentForeground = core.a2.tone(98); // Light on accent
      
      this.props.destructive = core.error.tone(60); // Bright error tone
      this.props.destructiveForeground = core.n1.tone(98); // Light on error
      
      this.props.ring = core.a1.tone(70); // Focus ring color
    } else {
      // Light theme values - based on light section in themes.css
      this.props.background = core.n1.tone(100); // White background
      this.props.foreground = core.n1.tone(5); // Dark text
      
      this.props.muted = core.n2.tone(96); // Very light gray
      this.props.mutedForeground = core.n2.tone(45); // Medium gray text
      
      this.props.popover = core.n1.tone(100); // Same as background
      this.props.popoverForeground = core.n1.tone(5); // Same as foreground
      
      this.props.card = core.n1.tone(100); // Same as background
      this.props.cardForeground = core.n1.tone(5); // Same as foreground
      
      this.props.border = core.n2.tone(90); // Light border
      this.props.input = core.n2.tone(90); // Same as border
      
      this.props.primary = core.a1.tone(40); // Medium primary color for light mode
      this.props.primaryForeground = core.a1.tone(100); // White on primary
      
      this.props.secondary = core.n2.tone(96); // Very light gray
      this.props.secondaryForeground = core.n1.tone(10); // Dark on secondary
      
      this.props.accent = core.a2.tone(96); // Very light accent
      this.props.accentForeground = core.a2.tone(10); // Dark on accent
      
      this.props.destructive = core.error.tone(50); // Medium error tone
      this.props.destructiveForeground = core.n1.tone(100); // White on error
      
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
   * Based on the format seen in themes.css
   */
  static toHslString(argb: number): string {
    // Convert ARGB to HSL
    const hct = Hct.fromInt(argb);
    
    // Get HSL values - approximated from HCT
    // Better mapping from HCT to HSL values
    const hue = Math.round(hct.hue);
    
    // Map chroma (0-150) to saturation (0-100)
    // Adjust saturation based on tone to better match Shadcn aesthetic
    let saturation = Math.round((hct.chroma / 150) * 100);
    if (hct.tone > 90 || hct.tone < 10) {
      saturation = Math.min(saturation, 10); // Reduce saturation for very light/dark colors
    }
    
    // Map tone (0-100) to lightness (0-100)
    const lightness = Math.round(hct.tone);
    
    return `${hue} ${saturation}% ${lightness}%`;
  }
}
