#!/bin/bash

# Array of files to keep (modify this list as needed)
keep_files=(
  "animated-number.mdx"
  "bento.mdx"
  "bg-animate-button.mdx"
  "bg-animated-fractal-grid.mdx"
  "bg-media.mdx"
  "buttons.mdx"
  "calendars.mdx"
  "canvas-fractal-grid.mdx"
  "cards.mdx"
  "color-picker.mdx"
  "confetti.mdx"
  "cool-mode.mdx"
  "date-time-picker.mdx"
  "direction-aware-tabs.mdx"
  "dock.mdx"
  "dynamic-island.mdx"
  "expandable.mdx"
  "family-button.mdx"
  "feedback.mdx"
  "file-upload.mdx"
  "floating-panel.mdx"
  "gantts.mdx"
  "gradient-heading.mdx"
  "index.mdx"
  "kanbans.mdx"
  "lightboard.mdx"
  "lists.mdx"
  "location-input.mdx"
  "minimal-card.mdx"
  "multi-select.mdx"
  "password-input.mdx"
  "phone-input.mdx"
  "popover-2.mdx"
  "popover-form.mdx"
  "separators.mdx"
  "shader-lens-blur.mdx"
  "shift-card.mdx"
  "side-panel.mdx"
  "signature-input.mdx"
  "smart-date-time-picker.mdx"
  "sortable-list.mdx"
  "spinner.mdx"
  "tables.mdx"
  "tags-input.mdx"
  "text-animate.mdx"
  "texts.mdx"
  "texture-button.mdx"
  "texture-card.mdx"
  "three-d-carousel.mdx"
  "tweet-grid.mdx"
  "typewriter.mdx"
)

# Find all files in the current directory
find . -maxdepth 1 -type f | while IFS= read -r file; do
  # Check if the file is in the keep_files array
  found=false
  for keep_file in "${keep_files[@]}"; do
    if [[ "$file" == "$keep_file" ]]; then
      found=true
      break
    fi
  done

  # Delete the file if it's not in the keep_files array
  if [[ "$found" == "false" ]]; then
    rm -f "$file"
    echo "Deleted: $file"  # Added to show which files are deleted
  fi
done

echo "Finished processing files."