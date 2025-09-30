###
# Page options, layouts, aliases and proxies
###

require 'uglifier'

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Multilingual configuration - Manual setup for Middleman 4.6
# activate :i18n, langs: [:it, :en, :fr], mount_at_root: :it

# FontAwesome configuration - using CDN approach

# Asset optimization for production
configure :build do
  activate :minify_css
  activate :minify_javascript, compressor: Uglifier.new(harmony: true)
  activate :asset_hash
end

# Helpers
helpers do
  def nav_link(text, url, options = {})
    options[:class] ||= ""
    options[:class] << " active" if current_page.url == url
    link_to text, url, options
  end
  
  def image_url(path)
    if path.start_with?('http')
      path
    else
      image_path(path)
    end
  end
  
  def current_translations
    locale = current_page.data.locale || 'it'
    data.translations[locale.to_s]
  end
  
  def wedding_data
    data.wedding
  end
  
  def language_url(locale)
    if locale == :it
      "/"
    else
      "/#{locale}/"
    end
  end
end

# Live reload for development
configure :development do
  activate :livereload
end

# GitHub Pages deployment will be handled manually