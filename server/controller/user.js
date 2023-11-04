import User from '../model/userSchema.js';

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ phone: request.body.phone, password: request.body.password });
        
        if(user) {
           
            return response.status(200).json({data:user});
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}

export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ phone: request.body.phone });
        console.log(exist);
        if(Boolean(exist)) {
            return response.status(401).json({ message: 'User already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ mesage: user });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}



