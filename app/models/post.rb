class Post < ApplicationRecord
  JSON_KEYS = %w{title content like_count comment_count}
  def as_json(opts = {})
    super.slice(*JSON_KEYS)
  end
end
