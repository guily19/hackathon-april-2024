#!/bin/bash

# Install dependencies
npm install

# Create dist directory
mkdir -p dist

# Copy source files
cp index.js dist/
cp package.json dist/

# Install production dependencies
cd dist
npm install --production

# Create ZIP file
zip -r ../function.zip .

# Clean up
cd ..
rm -rf dist

echo "Lambda function packaged successfully!" 