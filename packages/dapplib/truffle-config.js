require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'give glove fresh speak notice crime remember equip just private tail skirt'; 
let testAccounts = [
"0x330fa85096beea460eaca656042c3d9c0bfda1ed31b62d1332f9100853704c64",
"0x1e92cbfd1a2b447adba86a328768d3a1b98def7eef69d100d5a3349a6b4ace61",
"0x371e77ec615bc2f7cc5a73f6d6c89ffd883e539ef11729cf5a2cebeff0feca2a",
"0x4e8f6041df54786d722ec066610da033cf9c699a0f954b8f50d29f0ddd1fd1a9",
"0x38bdeb3022927ef153676f64dde569094a06c076616e6e562d1e418dd2f83371",
"0xad1ac459c8169df103a2b4a75f3926fb34e3565522e826a3c5cd776632a6ddde",
"0x109cb2131446c124eccfdbf87a858a78cdf41ccc8bba7985d328480cef36c9a6",
"0xb64f88acfa6a22b24a4a790b41cbd21cde33e8198f6881474d081f9cbdc315b7",
"0x4e509a8e21b71fcda5cba069abe61c0c5c5a624dd51ba880d92b18a584328b63",
"0x30a6dd54632082e70cd86039a78dc7614be5c788b1f8ef53386da3be17438805"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

