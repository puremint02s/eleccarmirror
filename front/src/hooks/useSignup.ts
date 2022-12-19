import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import * as Api from "apis/UserSignApi";

interface ErrorType {
  response: {
    data: {
      success: boolean;
      status: number;
      message: string;
    };
  };
}

export default function useSignup() {
  const navigate = useNavigate();

  const mutation = useMutation(Api.registerRequest, {
    onSuccess: message => {
      navigate("/login");
      console.log({ success: message });
    },
    onError: (error: ErrorType) => {
      const errorMessage = error.response.data.message;
      console.log({ error: errorMessage });
    },
  });

  return mutation;
}
