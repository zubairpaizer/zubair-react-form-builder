# Zubair React From Builder
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

