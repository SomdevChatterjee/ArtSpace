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
    
};