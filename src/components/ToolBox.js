import React, { Component } from 'react';

class ToolBox extends Component {
    render() {
        return (
            <div className="toolbox">
                <div className="card card-default">
                    <div className="card-header">
                        ToolBox
                    </div>
                    <div className="card-body toolbox-list p-0">
                        <ul className="list-group">
                            {
                                this.props.InputTypes.map((types) => {
                                    return <li draggable={true} onDragStart={(e) => this.dragField(e, types)} key={types} className='list-group-item singleField'>{types}</li>
                                })
                            }
                        </ul>
                        <ul className="list-group">
                              <li draggable={true} onDragStart={(e) => this.dragField(e, 'select')} className='list-group-item singleField'>Select</li>
                              <li draggable={true} onDragStart={(e) => this.dragField(e, 'textarea')} className='list-group-item singleField'>Text Area</li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <span className='pull-right'>Single Fields</span>
                    </div>
                </div>
            </div>
        );
    }

    dragField(e, types){
        e.dataTransfer.setData("dragField", types);
    }
}

export default ToolBox;
