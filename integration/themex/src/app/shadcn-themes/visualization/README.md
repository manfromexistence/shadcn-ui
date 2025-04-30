Product	Description	React Wrapper	Recommended Integration
G2	Statistical charts	@berryv/g2-react	Use wrapper for ease, or useEffect
G6	Graph visualization	Graphin, @antv/g6-extension-react	Use Graphin for React, or manual setup
L7	Geospatial visualization	None	Manual with useEffect
F2	Mobile charting	None	Manual with useEffect, ensure responsiveness
X6	Diagram editing	None	Manual with useEffect
S2	Tabular analysis	None	Manual with useEffe

# Remove Dir
```
rm -rf G2 G6 S2 F2 X6 L7
```

# Create Dir
```
git clone https://github.com/antvis/G2.git && cd G2 && rm -rf .git && cd ..
git clone https://github.com/antvis/G6.git && cd G6 && rm -rf .git && cd ..
git clone https://github.com/antvis/S2.git && cd S2 && rm -rf .git && cd ..
git clone https://github.com/antvis/F2.git && cd F2 && rm -rf .git && cd ..
git clone https://github.com/antvis/L7.git && cd L7 && rm -rf .git && cd ..
git clone https://github.com/antvis/X6.git && cd X6 && rm -rf .git && cd ..
```

# Push Changes
```
git add . && git commit -m "feat: visualizations" && git push
```