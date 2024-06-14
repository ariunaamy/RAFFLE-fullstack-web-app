// flowbite components
import { Button, Label, TextInput } from "flowbite-react"
import { GrPowerReset } from "react-icons/gr";

const Register = () => {
  return (
    <div>
      <h1 className="text-lg font-bold py-2">
        Register to participate in the raffle
      </h1>
      <form className="flex flex-col w-full my-4 gap-4">
        <div className="flex gap-3">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="First Name*" />
            </div>
            <TextInput
              id="firstName"
              type="email"
              placeholder="First Name"
              required
            />
          </div>
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="lastName" value="Last Name*" />
            </div>
            <TextInput
              id="lastName"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email*"/>
          </div>
          <TextInput id="email" type="email" placeholder="Email" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phoneInput" value="Phone*" />
          </div>
          <TextInput id="phoneInput" type="tel" placeholder="Phone"/>
        </div>
        <div className="flex justify-center gap-2 mt-7">
        <Button type="submit" gradientDuoTone="purpleToBlue" className="w-[100px]">
          Submit
        </Button>
        <Button type="submit" outline gradientDuoTone="purpleToBlue" className="w-[100px]">
        <GrPowerReset className="mr-2 h-5 w-5"/>
          Reset
        </Button>
        </div>   
      </form>
    </div>
  );
};

export default Register;
