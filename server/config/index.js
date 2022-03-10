const pubSecret = [
  "-----BEGIN RSA PRIVATE KEY-----",
  "MIIBOAIBAAJATyCj4E+lD8rhV8ffTTxsYeTKoXP+Kf8NOwoFR6IDHfv53E3eMy3t",
  "oDmnPEd+emqhod+cVNwbLybtT7xvo9ip0QIDAQABAkAVt4yirNlNq04LrJSx+wp4",
  "F7Yxd8djOVglQwvN7D5UxRwvdQRQ5S0KkmpHpkv8yBrcFifKelmiS/gv8kkLOGHR",
  "AiEAmIdQCxW/OGK+cfFJuM6OixFEfA43Dh+1HECXHkYsKI0CIQCEzjiYCX/8tIPy",
  "9E6h1TCI4KnfaNChHKEpSaJ24Ca/VQIgANQbVzQTCddfeXb6E4rrs02wtYvOOMFr",
  "Vm/zYjK3YrECIFqMcLHY6FbYjY69XE+jF/B7ndchk/4FkyyfdBIxSrnxAiAMMQLV",
  "FZZboaW8YQ6w0dg6lqyFgVMha5mhu3GW2Eqjig==",
  "-----END RSA PRIVATE KEY-----",
].join("\n");

module.exports = {
  mongodb_url: process.env.MONGODB_URL || "mongodb://localhost/forms",
  token_secret: process.env.TOKEN_SECRET || pubSecret,
  token_expires_in: process.env.TOKEN_EXPIRES || "3d",
};
