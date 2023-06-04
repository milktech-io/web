import React, { useEffect } from "react";
import {
  Stack,
  UnorderedList,
  ListItem,
  InputRightElement,
  Image,
  Text,
  InputGroup,
  Input,
  HStack,
} from "@chakra-ui/react";
import { Pressable } from "react-native-web";
import { Link, Navigate } from "react-router-dom";
import { validatePassword } from "../../../helpers/Validations";
import { actionPassword } from "../../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const Password = () => {
  const { t } = useTranslation();

  const { user } = useSelector((store) => store);
  const [password, setPassword] = React.useState(user.password);
  const [dataValidate, setDataValidate] = React.useState(false);

  let prevRoute = "/invite/username";
  const dispatch = useDispatch();

  if (user.prerregistered) prevRoute = "/invite/lastname";

  useEffect(() => {
    password && dispatch(actionPassword(password));
  }, [password, dispatch]);

  if (user.username === "") return <Navigate to="/invite/username" />;

  return (
    <Stack>
      <Text
        fontFamily={"Syne"}
        letterSpacing={2}
        lineHeight={2}
        fontWeight={"700"}
        fontSize={13}
      >
        {t("PassswordHola")} {user.username}. {t("PassswordDame")}
        <span
          style={{
            color: "#282532",
            fontWeight: "800",
          }}
        >
          {t("PassswordPas")}
        </span>
        .
      </Text>

      <Text fontFamily={"Syne"} lineHeight={2} fontSize={14}>
        <UnorderedList style={{ marginTop: "1rem" }}>
          <ListItem>{t("passwordCaracteres")}</ListItem>
          <ListItem>{t("PassswordMinimo")}</ListItem>
          <ListItem>{t("passwordMayucula")}</ListItem>
          <ListItem>{t("passwordNúmero")}</ListItem>
        </UnorderedList>
      </Text>
      <HStack position={"absolute"} bottom={20} width={"100%"}>
        <Link to={prevRoute}>
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
            value={password}
            fontFamily={"Syne"}
            paddingX={8}
            borderRadius={20}
            fontSize={"1rem"}
            placeholder={t("PassswordMensaje")}
            bg={"brand.white"}
            height={"3.5rem"}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="3.5rem" height="3.5rem">
            <Pressable
              onPress={() => {
                if (validatePassword(password)) {
                  setDataValidate(true);
                } else {
                  setDataValidate(false);
                  toast.error(t("PassswordError"), { theme: "dark" });
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

      {dataValidate && <Navigate to={"/invite/confirm_password"} />}
    </Stack>
  );
};
