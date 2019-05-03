const defaultState = []

const ChecklistReducer = (state = defaultState, { type, payload = {} }) => {

    let newState = state
    let listIdx = -1, sectionIdx = -1, itemIdx = -1

    switch(type) {

        case 'CREATE_CHECKLIST':
            return [...state, payload.newList ]

        case 'EDIT_CHECKLIST': 
            return state.map((list) => {
                if(list.id === payload.listID) {
                    return {
                        ...list,
                        ...payload.updates
                    }
                }
            })

        case 'REMOVE_CHECKLIST': 
            return state.filter(({ id }) => { return id !== payload.listID })

        case 'ADD_SECTION':
            newState = state
            listIdx = state.findIndex(({ id }) => id === payload.listID )
            if(listIdx !== -1){
               newState[listIdx].sections = state[listIdx].sections.concat(payload.newSection)
            }
            return newState

        case 'EDIT_SECTION':
            newState = state
            listIdx = state.findIndex(({ id }) => id === payload.listID )
            if(listIdx !== -1){
                sectionIdx = state[listIdx].sections.findIndex(({ id }) => id === payload.sectionID)
                if(sectionIdx !== -1){
                    newState[listIdx].sections[sectionIdx] = {
                        ...state[listIdx].sections[sectionIdx],
                        ...payload.updates
                    }
                }
            }
            return newState

        case 'REMOVE_SECTION': 
            newState = state
            listIdx = state.findIndex(({ id }) => id === payload.listID )
            if(listIdx !== -1){
                newState[listIdx].sections.filter(({ id }) => { return id !== payload.sectionID })
            }
            return newState

        case 'ADD_ITEM':
            newState = state
            listIdx = state.findIndex(({ id }) => id === payload.listID )
            if(listIdx !== -1){
                sectionIdx = state[listIdx].sections.findIndex(({ id }) => id === payload.sectionID)
                if(sectionIdx !== -1){
                    newState[listIdx].sections[sectionIdx].items = 
                        state[listIdx].sections[sectionIdx].items.concat(payload.newItem)
                }
            }
            return newState

        case 'EDIT_ITEM':
            newState = state
            listIdx = state.findIndex(({ id }) => id === payload.listID )
            if(listIdx !== -1){
                sectionIdx = state[listIdx].sections.findIndex(({ id }) => id === payload.sectionID)
                if(sectionIdx !== -1){
                    itemIdx = state[listIdx].sections[sectionIdx].items.findIndex(({ id }) => id === payload.itemID)
                    if(itemIdx !== -1){
                        newState[listIdx].sections[sectionIdx].items[itemIdx] = {
                            ...newState[listIdx].sections[sectionIdx].items[itemIdx],
                            ...payload.updates
                        }
                    }
                }
            }
            return newState;

        case 'REMOVE_ITEM': 
            newState = state
            listIdx = state.findIndex(({ id }) => id === payload.listID )
            if(listIdx !== -1){
                sectionIdx = state[listIdx].sections.findIndex(({ id }) => id === payload.sectionID)
                if(sectionIdx !== -1){
                    newState[listIdx].sections[sectionIdx].items = 
                        state[listIdx].sections[sectionIdx].items.filter(({ id }) => { return id !== payload.itemID })
                }
            }
            return newState;

        default:
            return state;
    }
}

export default ChecklistReducer