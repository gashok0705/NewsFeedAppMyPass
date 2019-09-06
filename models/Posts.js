//Posts resposnse model with same structure as response. 

class Posts {
  constructor(userId, id, title, body) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

export default Posts;
