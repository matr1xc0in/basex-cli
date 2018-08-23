# basex-cli
A JavaScript cli tool to encode/decode baseX (e.g. base58)

* node should be installed
* npm should be installed

*Limitation*: Only do Base 58 for now. Your help is appreciated. If you notice
other repo already done this, please let me know. I don't like reinventing wheels.

# How to use

```
npm install
```

```
node basex-cli.js 58 QmdpMvUptHuGysVn6mj69K53EhitFd2LzeHCmHrHasHjVX
```

# To decode an IPFS hex string

Work In Progress, not yet completed.

e.g.
```
$ node basex-cli.js 58 QmbALDn8kdjUXd356NCpwLh6ceyGRm7WxUpKfn1pnK1hT3
1220be83379017092140068a138fb4c3dd6e1bfc3e017f410406e6789f99fb864a86
$ ipfs object stat QmbALDn8kdjUXd356NCpwLh6ceyGRm7WxUpKfn1pnK1hT3
NumLinks: 0
BlockSize: 331
LinksSize: 3
DataSize: 328
CumulativeSize: 331
```

12 = `shasum -a 256 hello_ipfs.txt`

`ipfs object` and `ipfs cat` sub-commands are different. Although, you may see
the same output on your console.
```
bash-4.4$ ipfs cat QmbALDn8kdjUXd356NCpwLh6ceyGRm7WxUpKfn1pnK1hT3 | sha256sum -
857a755f58f7d6255f06f728c305ca9c7adb0f063db80185fc784abc2a554607  -
bash-4.4$ ipfs object data QmbALDn8kdjUXd356NCpwLh6ceyGRm7WxUpKfn1pnK1hT3 | sha256sum -
f69617f800cbf9e4b3e7dd63a34b448be05916580895da76221737f641938dfa  -
bash-4.4$ ipfs object data QmbALDn8kdjUXd356NCpwLh6ceyGRm7WxUpKfn1pnK1hT3 | hexdump -C
00000000  08 02 12 c0 02 48 6f 6c  61 2c 20 4d 75 6e 64 6f  |.....Hola, Mundo|
00000010  21 20 e4 bd a0 e5 a5 bd  ef bc 8c e6 96 b0 e4 b8  |! ..............|
00000020  96 e7 95 8c 7e 0a 42 6f  6e 6a 6f 75 72 21 20 48  |....~.Bonjour! H|
00000030  61 6c 6c 6f 21 0a 43 69  61 6f 7e 20 4f 4c c3 80  |allo!.Ciao~ OL..|
00000040  0a 4e 61 6d 61 73 74 65  7e 0a 53 61 6c 61 61 6d  |.Namaste~.Salaam|
00000050  21 0a d0 97 d0 b4 d1 80  d0 b0 d0 b2 d1 81 d1 82  |!...............|
00000060  d0 b2 d1 83 d0 b9 d1 82  d0 b5 21 0a 0a 49 20 64  |..........!..I d|
00000070  6f 6e 27 74 20 72 65 61  6c 6c 79 20 6b 6e 6f 77  |on't really know|
00000080  20 74 68 65 73 65 20 61  6e 64 20 6a 75 73 74 20  | these and just |
00000090  63 6f 70 69 65 64 2f 70  61 73 74 65 64 20 74 68  |copied/pasted th|
000000a0  65 6d 20 66 72 6f 6d 20  72 61 6e 64 6f 6d 20 74  |em from random t|
000000b0  72 61 6e 73 6c 61 74 6f  72 2e 0a 49 20 61 70 6f  |ranslator..I apo|
000000c0  6c 6f 67 69 7a 65 20 69  66 20 74 68 65 79 20 61  |logize if they a|
000000d0  72 65 20 69 6e 63 6f 72  72 65 63 74 2c 20 6f 66  |re incorrect, of|
000000e0  66 65 6e 73 69 76 65 2c  20 6f 72 20 69 6e 63 6f  |fensive, or inco|
000000f0  72 72 65 63 74 2c 20 61  6e 64 0a 70 6c 65 61 73  |rrect, and.pleas|
00000100  65 20 68 65 6c 70 20 6d  65 20 63 6f 72 72 65 63  |e help me correc|
00000110  74 20 74 68 65 6d 7e 20  79 6f 75 72 20 66 65 65  |t them~ your fee|
00000120  64 62 61 63 6b 20 61 6e  64 20 70 75 6c 6c 20 72  |dback and pull r|
00000130  65 71 75 65 73 74 73 20  61 72 65 20 77 65 6c 63  |equests are welc|
00000140  6f 6d 65 2e 0a 18 c0 02                           |ome.....|
00000148
bash-4.4$ ipfs cat QmbALDn8kdjUXd356NCpwLh6ceyGRm7WxUpKfn1pnK1hT3 | hexdump -C
00000000  48 6f 6c 61 2c 20 4d 75  6e 64 6f 21 20 e4 bd a0  |Hola, Mundo! ...|
00000010  e5 a5 bd ef bc 8c e6 96  b0 e4 b8 96 e7 95 8c 7e  |...............~|
00000020  0a 42 6f 6e 6a 6f 75 72  21 20 48 61 6c 6c 6f 21  |.Bonjour! Hallo!|
00000030  0a 43 69 61 6f 7e 20 4f  4c c3 80 0a 4e 61 6d 61  |.Ciao~ OL...Nama|
00000040  73 74 65 7e 0a 53 61 6c  61 61 6d 21 0a d0 97 d0  |ste~.Salaam!....|
00000050  b4 d1 80 d0 b0 d0 b2 d1  81 d1 82 d0 b2 d1 83 d0  |................|
00000060  b9 d1 82 d0 b5 21 0a 0a  49 20 64 6f 6e 27 74 20  |.....!..I don't |
00000070  72 65 61 6c 6c 79 20 6b  6e 6f 77 20 74 68 65 73  |really know thes|
00000080  65 20 61 6e 64 20 6a 75  73 74 20 63 6f 70 69 65  |e and just copie|
00000090  64 2f 70 61 73 74 65 64  20 74 68 65 6d 20 66 72  |d/pasted them fr|
000000a0  6f 6d 20 72 61 6e 64 6f  6d 20 74 72 61 6e 73 6c  |om random transl|
000000b0  61 74 6f 72 2e 0a 49 20  61 70 6f 6c 6f 67 69 7a  |ator..I apologiz|
000000c0  65 20 69 66 20 74 68 65  79 20 61 72 65 20 69 6e  |e if they are in|
000000d0  63 6f 72 72 65 63 74 2c  20 6f 66 66 65 6e 73 69  |correct, offensi|
000000e0  76 65 2c 20 6f 72 20 69  6e 63 6f 72 72 65 63 74  |ve, or incorrect|
000000f0  2c 20 61 6e 64 0a 70 6c  65 61 73 65 20 68 65 6c  |, and.please hel|
00000100  70 20 6d 65 20 63 6f 72  72 65 63 74 20 74 68 65  |p me correct the|
00000110  6d 7e 20 79 6f 75 72 20  66 65 65 64 62 61 63 6b  |m~ your feedback|
00000120  20 61 6e 64 20 70 75 6c  6c 20 72 65 71 75 65 73  | and pull reques|
00000130  74 73 20 61 72 65 20 77  65 6c 63 6f 6d 65 2e 0a  |ts are welcome..|
00000140
```
