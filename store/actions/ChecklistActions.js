import { createActions } from 'redux-actions'

export const {
    createChecklist,
    editChecklist,
    removeChecklist,
    addSection,
    editSection,
    removeSection,
    addItem,
    editItem,
    removeItem,
} = createActions({
    CREATE_CHECKLIST: (newList) => ({ newList }),
    EDIT_CHECKLIST: (listID, updates) => ({ listID, updates }),
    REMOVE_CHECKLIST: listID => ({ listID }),
    ADD_SECTION: (listID, newSection) => ({ listID, newSection }),
    EDIT_SECTION: (listID, sectionID, updates) => ({ listID, sectionID, updates }),
    REMOVE_SECTION: (listID, sectionID) => ({ listID, sectionID }),
    ADD_ITEM: (listID, sectionID, newItem) => ({ listID, sectionID, newItem }),
    EDIT_ITEM: (listID, sectionID, itemID, updates) => ({ listID, sectionID, itemID, updates }),
    REMOVE_ITEM: (listID, sectionID, itemID) => ({ listID, sectionID, itemID }),

}
)