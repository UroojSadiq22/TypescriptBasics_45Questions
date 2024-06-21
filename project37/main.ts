// Question 37: Large Shirts: Default values in make_shirt().

function make_shirt(size = 'large' , message = 'I Love Typescript' ){
    console.log(`Making a ${size} t-shirt with a message "${message}" printed on it`)
};

make_shirt();
make_shirt('medium');
make_shirt('small' , 'Dive into Coding')
