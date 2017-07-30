$(document).ready(function() {
    initPlans_holderHover();
    initValidate();
});
function initPlans_holderHover () {
    var button = $(".plans-holder .plan-column .button"),
        parent = ".section-plans .plan-column";
    button.hover(
       function(){
            $(this).closest(parent).addClass('hover')
        },
       function(){
            $(this).closest(parent).removeClass('hover')
        }
    );
};
function initValidate () {
    $(".contact-form").validate({
       rules:{
            name:{
                required: true,
                pattern: "^([a-zA-Z\s]{3,})$",
            },
            email:{
                required: true,
                email: true,
            },
            textarea:{
                required: true,
            },
       },

       messages:{
            name:{
                required: "This field is required",
                pattern: "This value seems to be invalid",
            },
            email:{
                required: "This field is required",
                email: "Enter the correct email",
            },
            textarea: {
                required: "This field is required",
            },
       },
    });
}