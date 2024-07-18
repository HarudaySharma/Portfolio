import Button from '../../../components/Button'
import Input from './Input'
import TextArea from './TextArea'

import { useForm, ValidationError } from '@formspree/react';
import ContactState from './ContactState';

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

const ContactForm = () => {
    const [state, handleSubmit] = useForm(endpoint)

    if (state.succeeded) {
        return (
            <ContactState
                show
                className='text-green-300'
            >
                Sent Successfully
            </ContactState>
        )
    }

    return (
        <form
            onSubmit={handleSubmit}
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
                name='name'
            />
            <Input
                type='email'
                required
                placeholder='Email'
                id='email'
                name='email'
            />
            <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
            />
            <TextArea
                required
                placeholder='Message'
                id='message'
                name='message'
            />
            <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
            />
            <Button
                type='submit'
                disabled={state.submitting}
            >
                Submit
            </Button>
            <ContactState
                show={!state.submitting && Boolean(state.errors)}
                className='text-red-300'
            >
                Please Try Again
            </ContactState>
        </form>
    )
}

export default ContactForm
