import React, { useEffect } from "react";
import {
  Stack,
  InputRightElement,
  Image,
  Text,
  InputGroup,
  Input,
  HStack,
} from "@chakra-ui/react";
import { Pressable } from "react-native-web";
import { Link, Navigate } from "react-router-dom";
import { validatePasswordConfirm } from "../../../helpers/Validations";
import { actionConfirmPassword } from "../../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const ConfirmPassword = () => {
  const { user } = useSelector((store) => store);
  const [confirmPassword, setConfirmPassword] = React.useState(
    user.password_confirmation
  );
  const [dataValidate, setDataValidate] = React.useState(false);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    confirmPassword && dispatch(actionConfirmPassword(confirmPassword));
  }, [confirmPassword, dispatch]);

  if (user.password === "") return <Navigate to="/invite/password" />;

  return (
    <Stack>
      <Text
        fontFamily={"Syne"}
        letterSpacing={2}
        lineHeight={1.5}
        fontWeight={"700"}
        fontSize={13}
      >
        {t("ConfirmarPasswordPorfavor")}
        <span
          style={{
            color: "#282532",
            fontWeight: "800",
          }}
        >
          {t("ConfirmarPasswordContraseña")}
        </span>
        .
      </Text>

      <HStack position={"absolute"} bottom={20} width={"100%"}>
        <Link to={"/invite/password"}>
          <Image
            justifyContent={"center"}
            w={11}
            h={21}
            marginRight={7}
            src={require("../../../assets/return.png")}
          ></Image>
        </Link>

        <InputGroup>
          <Input
            value={confirmPassword}
            fontFamily={"Syne"}
            paddingX={8}
            borderRadius={20}
            fontSize={"1rem"}
            placeholder={t("ConfirmarCPasswordMensaje")}
            bg={"brand.white"}
            height={"3.5rem"}
            type={"password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="3.5rem" height="3.5rem">
            <Pressable
              onPress={() => {
                if (validatePasswordConfirm(user.password, confirmPassword)) {
                  setDataValidate(true);
                } else {
                  toast.error(t("ConfirmarPasswordError"), {
                    theme: "dark",
                  });
                  setDataValidate(false);
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
      </HStack>

      {dataValidate && <Navigate to={"/invite/finish"} />}
    </Stack>
  );
};
