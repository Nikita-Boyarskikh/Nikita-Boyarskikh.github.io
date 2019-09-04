module.exports = {
  title:      'Nikita Boyarskikh CV',
  mediaRegex: /\.(woff|woff2|ttf|eot|svg|png|jpe?g|gif|bmp)$/,
  indexHtml:  'index.html',
  indexJs:    'index.js',
  paths:      {
    dist: 'dist',
    src: 'src',
    public: 'public'
  },
  icons:      {
    prefix: 'icons/',
    background: '#fff',
    logo: 'logo.svg'
  },
  meta:       {},
  manifest:   {
    json: 'manifest.json',
    publicName: 'manifest.json',
    appcacheFilename: 'nikita-boyarskikh-cv-manifest.appcache'
  },
  devServer:  {
    port: 8080
  },
  limits:     {
    maxAssetSize: 10 * 1024 * 1024,
    maxEntrypointSize: 15 * 1024 * 1024,
    urlLoaderLimit: 128 * 1024
  }
};
