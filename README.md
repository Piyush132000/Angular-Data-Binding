# Angular-Data-Binding
Angular Data-Binding and there type

Angular provide us an two differeny way for binding the data 
1. One way binding  = String Interpolation  , Poperty Binding and Event Binding
2. Two way binding


String InterPolation : 

String Interpolation is a one-way data-binding . It  allows us to display data dynamically from typesctipt file to Html Template . It use double curly braces to display the data from the component to the view.

Property Binding :

Property binding is  also a one-way data-binding , as values go from the component to the template layer and changes made in the component updates the properties bound in the template . 

In Angular applications, we can attach properties to DOM using values declared in the component. Using the square brackets [ ] syntax and  we can bind properties to DOM elements. The property to be bound can also be prefixed with bind- . 

Event Binding :

Event Binding in angular is other way binding , in which we are not binding data from typescript file to Html template . In event binding we are handling a event that are raised from the DOM like click on button , mouseenter , mouseleave and many more.

Two Way Binding :

Angular gives us an very nice way to bind data and it is Two way Data-Binding . In one way data-binding we are binding data  from component class to view that mean if we do any change in data in view it will not be reflected in component typescript file .

But by using two way data binding if we do any change in View  it will reflect in typesScript file and all the place where we binding a such property.
