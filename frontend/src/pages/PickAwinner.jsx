import { TextInput, Button, Card } from "flowbite-react";
import { FaKey } from "react-icons/fa6";

const PickAwinner = () => {
  return (
    <div className="">
      <h1 className="mx-7 py-2 text-lg font-bold">Pick a winner</h1>
      <div className=" max-w-lg mx-auto">
        <TextInput
          id="email4"
          type="email"
          icon={FaKey}
          placeholder="Secret token"
          required
        />
        <Button gradientDuoTone="purpleToBlue" className="my-6 w-[100%]">
          Pick a Winner
        </Button>
        <Card className="text-slate-500">
          <h3>Secret Token</h3>
          <p className="text-xs">
            The secret token used when creating the raffle must be provided.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default PickAwinner;
