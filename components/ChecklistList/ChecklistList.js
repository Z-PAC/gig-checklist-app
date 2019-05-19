import React from 'react'
import { Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

import ChecklistElement from './ChecklistElement'

class ChecklistList extends React.Component {

    constructor(props){
        super(props)

        this.renderItem = this.renderItem.bind(this)
    }

    renderItem({ item }){
        return <ChecklistElement
                    title={item.title}
                    date={item.date}
                />
    }

    render(){
        const { checklists } = this.props
        return ( 
            checklists.length === 0 ? 
            (
                <Text>No checklists</Text>
            ) : (
                <FlatList
                    data={checklists}
                    renderItem={this.renderItem}
                />
            )
        )
    }
}

const mapStateToProps = ({ checklists }) => ({
    checklists: checklists
})

export default connect(mapStateToProps)(ChecklistList)