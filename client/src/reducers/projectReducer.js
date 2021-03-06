import  {PROJECT_GET_PROJECTSINFO_REQUEST,PROJECT_GET_PROJECTSINFO_SUCCESS,PROJECT_GET_PROJECTSINFO_FAILURE} from '../constants/projectConstants';
const initialState = {
    requesting:false,
    projects:[],
    statusText: '',
    status:0
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_GET_PROJECTSINFO_REQUEST:
      return Object.assign({}, state, {
            'projects':[],
            'statusText': null,
            'status':0,
            'requesting':true
        });
      break;
    case PROJECT_GET_PROJECTSINFO_SUCCESS:
      return Object.assign({}, state, {
            'statusText': `获得项目成功`,
            'status':0,
            'projects':action.payload.projects,
            'requesting':false
        });
      break;
    case PROJECT_GET_PROJECTSINFO_FAILURE:
      return Object.assign({}, state, {
            'status':action.payload.status,
            'statusText': action.payload.statusText,
            'projects':[],
            'requesting':false
        });
      break;
    default:
      return state;
  }
}
export default projectReducer;