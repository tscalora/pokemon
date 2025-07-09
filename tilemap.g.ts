// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile19 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile20 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile21 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level3":return tiles.createTilemap(hex`0a000a0004040404040404040404040404040404040404040404020203020202040404040101010101010404040401010101010104040404010101010101040404040101010101010404040401010101010104040404040404040404040404040404040404040404`, img`
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 2 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile10,myTiles.tile6,myTiles.tile8,myTiles.tile7], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a000a00010101020101010101010404040404040404040404040404040404040404040404040404040404040404080404090a0404040404040404040404040404070506040404040404040404040404040404040404040404040404040404040404030304040404`, img`
2 2 2 . 2 2 2 2 2 2 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . 2 . . 2 2 . . . 
. . . . . . . . . . 
. . 2 . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile6,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile12,myTiles.tile14,myTiles.tile16,myTiles.tile15,myTiles.tile17,myTiles.tile18], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000200005050505050505050505050505050505070a0a0a0a0a02020202020303020206070a0a0a0a0a02020202020203030206070a0a0a0a0a02020201020202030206070808080808010203020203020302060708080c080803010202020102030206070202020303030103030102030202060702010203020303030202020302020607020203020102030203020201020206070202010202020103020303020202060702020102020303030103010202020607020301030303030301030202020206070203030201020202030202020202020702020302020202030202020202020207020102030303030201010202020206070202020202020202020202020202060605050505070202060505050505050704020202020202020202020b0b0b0b0404020103030303030303030b0b0b0b0404020203030302020303020b0b0b0b04040a0a0a0a0a03030203020b0b0b0b04040a0a0a0a0a03030201020b0b0b0b0404080808080803030301030b0b0b0b04040808090808020203030202030302040403030303010202030302010203020404010303030202020203020203020304040302030201020202030303020303040403030303020202020303020303020404020301030202020202030303020204040202020302020202020202020202040402020203020202020202020102020406050505050505050505050505050507`, img`
2222222222222222
222222.........2
222222.........2
222222.........2
222222.........2
222.22.........2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2...............
2...............
2..............2
2..............2
222222..22222222
2..............2
2..............2
2..............2
222222.........2
222222.........2
222222.........2
222.22.........2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2222222222222222
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles4,sprites.builtin.forestTiles2,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.castle.shrub,myTiles.tile4], TileScale.Sixteen);
            case "level0":
            case "level4":return tiles.createTilemap(hex`1000200005050505050505050505050505050505070a0a0a0a0a02020202020303020206070a0a0a0a0a02020202020203030206070a0a0a0a0a02020201020202030206070808080808010203020203020302060708080c080803010202020102030206070202020303030103030102030202060702010203020303030202020302020607020203020102030203020201020206070202010202020103020303020202060702020102020303030103010202020607020301030303030301030202020206070203030201020202030202020202020702020302020202030202020202020207020102030303030201010202020206070202020202020202020202020202060605050505070202060505050505050704020202020202020202020b0b0b0b0404020103030303030303030b0b0b0b0404020203030302020303020b0b0b0b04040a0a0a0a0a03030203020b0b0b0b04040a0a0a0a0a03030201020b0b0b0b0404080808080803030301030b0b0b0b04040808090808020203030202030302040403030303010202030302010203020404010303030202020203020203020304040302030201020202030303020303040403030303020202020303020303020404020301030202020202030303020204040202020302020202020202020202040402020203020202020202020102020406050505050505050505050505050507`, img`
2222222222222222
222222.........2
222222.........2
222222.........2
222222.........2
222.22.........2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2...............
2...............
2..............2
2..............2
222222..22222222
2..............2
2..............2
2..............2
222222.........2
222222.........2
222222.........2
222.22.........2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2222222222222222
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles4,sprites.builtin.forestTiles2,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.castle.shrub,myTiles.tile4], TileScale.Sixteen);
            case "level6":
            case "level5":return tiles.createTilemap(hex`1000100002020202020202020202020202020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101030301010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile20,myTiles.tile6,myTiles.tile21], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile11":
            case "tile13":return tile13;
            case "myTile12":
            case "tile14":return tile14;
            case "myTile14":
            case "tile16":return tile16;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile13":
            case "tile15":return tile15;
            case "myTile15":
            case "tile17":return tile17;
            case "myTile16":
            case "tile18":return tile18;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile17":
            case "tile19":return tile19;
            case "myTile18":
            case "tile20":return tile20;
            case "myTile19":
            case "tile21":return tile21;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
