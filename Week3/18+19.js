switch (browser) {
    case 'Edge':
    alert( "You've got the Edge!" );
    break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;
    default:
    alert( 'We hope that this page looks ok!' );
    }



// now I will turn the first example of switch code to if statement

let browser = 'Chrome';
if(browser === 'Edge'){
 alert( "You've got the Edge!" ); 
}
else if (browser ==='Chrome','Firefox','Safari','Opera') 
{
alert( 'Okay we support these browsers too' );
}
else{
alert( 'We hope that this page looks ok!' );
}

