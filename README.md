# Zubair React From Builder

![](zrfb-screenshot-1.png)

![](zrfb-screenshot-2.png)


You can pass custom components to the form builder
<pre>
const myCustoms = [
    {
        container : &lt ContainerComponent/&gt,
        preview : &lt PreviewComponent/&gt,
        toolbox : {
            title : 'Component',
            icon : 'fa fa-user',
            name : 'CUSTOM_COM'
        },
        states : {
            toolType: 'CUSTOM_COM',
            num1 : 1,
            num2 : 2
        }
    }
]



Simply pass myCustoms to
&lt FormContainer custom={ myCustoms } /&gt
&lt ToolBox custom={ myCustoms } /&gt
</pre>

#Required Props Methods Of Component

1. this.props.changeValue(state, this.props.index)

2. this.props.removeField(index)

