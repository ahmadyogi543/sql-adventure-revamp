#!/bin/bash

# Directory where images are located
DIR="."

# Target size
WIDTH=600
HEIGHT=400

# Output folder (you can set this to the same folder if you want to overwrite)
OUTPUT_DIR="$DIR/resized"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Loop through all .jpg files in the directory
for img in "$DIR"/*.jpeg; do
    # Extract the filename without extension
    filename=$(basename "$img")
    
    # Resize the image to fill 600x400 (cropping excess if needed)
    magick convert "$img" -resize "${WIDTH}x${HEIGHT}^" -gravity center -extent ${WIDTH}x${HEIGHT} "$OUTPUT_DIR/$filename"
    
    echo "Resized and cropped $img -> $OUTPUT_DIR/$filename"
done

echo "All images have been resized and cropped!"
