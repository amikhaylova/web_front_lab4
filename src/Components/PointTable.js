import React, {Component} from "react";
import {connect} from "react-redux";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

class PointTable extends Component {

    render() {
        return (

                <DataTable value={this.props.points} id='dataTable' >
                    <Column field="x" header="X"/>
                    <Column field="y" header="Y"/>
                    <Column field="r" header="R"/>
                    <Column field="hit" header="Hit" >
                    </Column>
                </DataTable>

        )


    }
}

const mapStateToProps = function (state) {
    return {
        points: state.user.points,
    }
};

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PointTable)
