import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function ContactForm() {
    return (
       <Card color="transparent" shadow={false}>
       
        <form className="mt-8 mb-2  pb-[6rem] max-w-screen-lg px-2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="Phone"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            
          </div>
         
          <Button className="mt-6" fullWidth>
            Send
          </Button>
          
        </form>
      </Card>
    );
  }


  export default ContactForm