import AllRaffles from "../components/AllRaffles";
// flowbite components
import { Button, Label, TextInput } from "flowbite-react";

const Home = () => {
  return (
    <div className="flex flex-col">
      <form className="flex flex-col w-full my-4 gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Raffle Name:*" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Raffle Name"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Raffle Secret Token*" />
          </div>
          <TextInput
            id="password1"
            type="password"
            placeholder="Raffle Secret Toke"
            required
          />
        </div>
        <p className="text-xs">
          You must remember the Raffle Token - it will be asked when picking a
          winner
        </p>
        <Button type="submit" gradientDuoTone="purpleToBlue">
          Create New Raffle
        </Button>
      </form>
      <AllRaffles />
    </div>
  );
};


export default Home;
