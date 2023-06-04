import React, { useEffect } from "react";
import {
  InputRightElement,
  Image,
  Text,
  Box,
  InputGroup,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Pressable } from "react-native";
import { Navigate } from "react-router-dom";
import { validateName } from "../../../helpers/Validations";
import { actionFirstname } from "../../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const FirstName = () => {
  const { t } = useTranslation();

  const { user } = useSelector((store) => store);
  const [firstName, setFirstname] = React.useState(user.name);
  const [dataValidate, setDataValidate] = React.useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    firstName && dispatch(actionFirstname(firstName));
  }, [firstName, dispatch]);

  return (
    <Stack>
      <Box width={"100%"} h={"52%"} mt={10}>
        <Text
          fontFamily={"Syne"}
          letterSpacing={2}
          lineHeight={2}
          fontWeight={"700"}
          fontSize={13}
        >
          {t("FirstNameWhatIs")}
          <span
            style={{
            color: "#282532",
            fontWeight: "800",
            }}
          >
            {t("nombre")}
          </span>
          ?
        </Text>
      </Box>

      <InputGroup position={"absolute"} bottom={20} w={"100%"}>
        <Input
          value={firstName}
          fontFamily={"Syne"}
          paddingX={8}
          borderRadius={20}
          fontSize={"1rem"}
          placeholder={t("NAMEMENSAJE")}
          bg={"brand.white"}
          height={"3.5rem"}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <InputRightElement width="3.5rem" height="3.5rem">
          <Pressable
            onPress={() => {
              if (!validateName(firstName)) {
                setDataValidate(false);
                toast.error(t("MEnsajeNAme"), { theme: "dark" });
              } else {
                setDataValidate(true);
              }
            }}
          >
            <Image
              w={23}
              h={22}
              src={require("../../../assets/send.png")}
              alt="send"
            />
          </Pressable>
        </InputRightElement>
      </InputGroup>

      {dataValidate && <Navigate to={"/invite/lastname"} />}
    </Stack>
  );
};
