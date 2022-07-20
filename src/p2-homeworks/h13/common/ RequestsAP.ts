import axios from "axios";

export const app = {
    fetchAuth: async (success: boolean) => {

        const response = await axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success})
        return response
    }
}