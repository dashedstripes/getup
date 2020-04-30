export interface Standup {
  content: string;
}

function build(content: string): Standup {
  if(content === '') {
    throw new Error('Content cannot be blank!');
  }

  return {
    content
  }
}

export {
  build
}