export default function(state=null,action){
  //state here refer to current state
    switch (action.type) {
      case 'TASK_SELECTED':
        return action.payload;
    }

  return state;

}
