export interface Worklog {
  content: string;
}

function build(content: string): Worklog {
  if(content === '') {
    throw new Error('Content cannot be blank');
  }
  
  return {
    content
  }
}

export {
  build
}