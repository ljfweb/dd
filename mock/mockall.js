module.exports = {
  rules: [
    {
      pattern:/\/CarApp\/api\/buylist.do\?page=0$/,
      respondwith: 'buylist.json'
    }
  ]
}
