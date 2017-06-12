puts 'Seeding posts...'

post1 = Post.where({
  title: 'first post',
  content: 'this is the first post ever written in the db and here...',
  like_count: 0,
  comment_count: 0
}).first_or_create

post2 = Post.where({
  title: 'second post..a little longer',
  content: 'this is the second post ever written in the db and here...',
  like_count: 2,
  comment_count: 2
}).first_or_create
