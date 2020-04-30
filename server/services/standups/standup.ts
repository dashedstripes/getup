export interface Standup {
  content: string;
}

function build(content: string): Standup {
  return {
    content
  }
}

export {
  build
}