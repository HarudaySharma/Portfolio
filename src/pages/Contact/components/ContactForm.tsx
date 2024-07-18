import Button from '../../../components/Button'
import Input from './Input'
import TextArea from './TextArea'

// TODO: make it working
const ContactForm = () => {
    return (
        <form
            className='
                flex
                flex-col
                items-center
                max-w-[40em]
                w-[--contact-form-width]
                sm:w-[32em]
                lg:w-[40em]
                gap-8
            '
        >
            <Input
                type='text'
                required
                placeholder='Name'
                id='name'
            />
            <Input
                type='text'
                required
                placeholder='Email'
                id='email'
            />
            <TextArea
                required
                placeholder='Message'
                id='message'
            />
            <Button
                type='submit'
            >
                Submit
            </Button>

        </form>
    )
}

export default ContactForm
