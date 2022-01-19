require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth punch essay idea clip blue gentle'; 
let testAccounts = [
"0x21b843a43fb2296161c4a8ea90ea79334b2c1ec35ef80c162b8414f3b4448852",
"0x36064db12d0a5a8c5fefbc8e400b1b4b4b11fdc0d79a9d9a98be8e3b2a736bd7",
"0x1496ddfe02231a739dcf8a5f5aa5178a8463f652c6f1f430e0cef58c659c45c0",
"0x992ec0c4024aaf35950fa9ee9b3d78c237bb34a4e519a8365d13bf4948b03987",
"0xbba77945442b342e8b55c2c90aa003b9707735a6ddb9d6faa79fc6efc44856d8",
"0xd47959265f618ddcd8bf325ac5fb55b3434a2cdfb78e0cb5df1a44908ff5b0b0",
"0x36b38e1f71470500914078c385b5c80db3ceda076627914a0ae07e4810b0673a",
"0x5585d6a5b79667551d5f9494ef2cb67b1fa604cd9d2604da13f17dcb4cda942e",
"0x7bedbd73df764a668363f03814f8a89b18e7ca4ec0961982710d7c3a8621e178",
"0x57d65b111370e3c37a173821d68dc9ee32e85ac212909211f64751dfc122f8e8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


