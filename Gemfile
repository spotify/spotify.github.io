source "https://rubygems.org"

gem "github-pages", "~> 228", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2", ">= 1.2.10"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# https://github.com/github/pages-gem/issues/752 - should be removed when upgraded to Jekyll 4.x
gem "webrick", "~> 1.8"
