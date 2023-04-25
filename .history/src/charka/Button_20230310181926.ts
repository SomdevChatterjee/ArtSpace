import {ComponentStyleConfig} from "@chakra-ui/theme"

export const Button: ComponentStyleConfig = {
    baseStyle:{
        borderRadius:'60px',
        fontsize:'10pt',
        fontWeight:'700',
        _focus:{
            boxShadow:"none"
        },
    },
    sizes:{
        sm:{
            fontsize:"8pt"
        },
        md:{
            fontsize:'10pt',
            // height:"28px"
        },
    },
    variants:{
        solid:{
            color:"yellow.400",
            bg:"black",
            _hover:{
                bg:"white",
                border:"2px solid black"
            },
        },
        outline:{
            color:"black",
            bg:"white",
            border:"2px solid",
            borderColor:"yellow.400",
            _hover:{
                bg:"yellow.400"
            },
        },
        oauth:{
            display:"flex",
            color:"black",
            bg:"white",
            border:"2px solid",
            borderColor:"yellow.400",
            _hover:{
                bg:"yellow.400"
            },
        }
    },
};