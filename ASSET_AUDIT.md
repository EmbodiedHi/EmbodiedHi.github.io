# Asset audit

## Existing assets

The repository contained three collaborator portraits with clear project provenance. They were retained and consistently cropped. No reusable experiment screenshots, verified research figures, or licensed 3D models were present.

## 3D models considered

- Khronos glTF Sample Assets: permissively distributed samples, but no cohesive human–humanoid pair suited the research concept without mixing visual styles; rejected.
- Poly Haven and Kenney: strong licensing clarity, but no appropriate compact articulated human–robot pair was identified; rejected.
- Sketchfab: potentially suitable models exist, but creator-by-creator licenses, attribution, polygon counts, and redistribution terms made a cohesive pair unnecessarily risky; rejected.

## Final strategy

The hero uses original procedural Three.js geometry: one abstract human, one geometric humanoid, a shared task object, and a continuous tube curve. No GLB is shipped. Model transfer size is therefore 0 bytes; geometry is generated locally. Materials, textures, and animation clips: three lightweight materials, no textures, no external clips. The build code-splits Three.js and loads it after the main interface.

## Fallback

An HTML/CSS composition with the same human–robot–task meaning is shown while loading, for reduced motion, and when WebGL construction fails.
