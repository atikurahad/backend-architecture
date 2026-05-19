 
 
 
export async function demo(req, res) {


 return res.status(200).json({
     message: "Data fetched successfully",
     data: {
         name: "John Doe",
         age: 30,
         email: "john.doe@example.com",
         hobbies: ["reading", "traveling", "coding"],
            address: {
                street: "123 Main St",
                city: "New York",
                state: "NY",
                zip: "10001"
            },
            friends: [
                {
                    name: "Jane Smith",
                    age: 28,
                    email: "jane.smith@example.com"
                }
            ],

            Date: new Date()
     }

 }) 
}

export const demo2 = async (req, res) => {
    let name = req.params.name;
    let age = req.params.age;
    return res.status(200).json({
        message: "Data fetched successfully",
        data: {
            name: name,
            age: age
        }
    })
}


export const demo3 = async (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    return res.status(200).json({
        message: "Data fetched successfully",
        data: {
            name: name,
            age: age
        }
    })
}


export const demo4 = async (req,res)=>{
    let key01 = req.headers.key01;
    let key02 = req.headers.key02;
    return res.status(200).json({
        message: "Data fetched successfully",
        data: {
            key01: key01,
            key02: key02
        }
    })
}

export const demo5 = async (req,res)=>{
    let cokies = req.cookies;
 let name = req.body.name;
 let age = req.body.age;
 let email = req.body.email;
 let password = req.body.password;
 return res.status(200).json({
     message: "Data fetched successfully",
     data: {
         name: name,
         age: age,
            email: email,
            password: password,
            cokies: cokies

     }
 })

}

export const demo6 = async (req,res)=>{
    let body = req.body;
    res.status(200).json({
        message: "Data fetched successfully",
        data: body
    })
}      
