# LCSReader

This reader, or render is partially migrated from [drendog/Logic-Circuit-Simulator](https://github.com/drendog/Logic-Circuit-Simulator), which means you'll still need to use the original simulator to design circuits first, then get the json file to use with this reader.

The reader has been refactored with [Konva](https://github.com/konvajs/konva) instead of [p5.js](https://github.com/processing/p5.js), to reduce the size of distribution files as p5.js doesn't support modern treeshaking at the moment. However due to the usage in this repository, the reader is not fully refactored, e.g. the short circuits, the ICs are missing.

