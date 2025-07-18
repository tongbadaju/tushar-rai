import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import Image from "next/image";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills[0].images.map((image) => image.alt),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.portfolio.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Flex paddingX="8">Résumé</Flex>
                <IconButton
                  href={about.portfolio.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                weight="default"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" wrap={false} marginBottom="4">
                      <Flex gap="8" vertical="center">
                        {experience.logo && (
                          <Image
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            style={{ width: "45px", height: "45px", objectFit: "contain" }}
                          />
                        )}
                        <Column>
                          <Text id={experience.company} variant="heading-strong-l">
                            {experience.company}
                          </Text>
                          {experience.address && (
                            <Text variant="body-default-xs" onBackground="neutral-weak">
                              {experience.address}
                            </Text>
                          )}
                        </Column>
                      </Flex>
                      <Text 
                        variant="heading-default-xs" 
                        onBackground="neutral-weak"
                        style={{
                        whiteSpace: "nowrap",
                        fontSize: "12px", 
                      }}>
                        {experience.timeframe}
                      </Text>
                    </Flex>

                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>

                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Flex gap="8" vertical="center">
                        {institution.logo && (
                          <Image
                            src={institution.logo}
                            alt={`${institution.name} logo`}
                            style={{
                              height: "47px",
                              width: "50px",
                            }}
                          />
                        )}
                        <Column>
                          <Text id={institution.name} variant="heading-strong-l">
                            {institution.name}
                          </Text>
                          {institution.address && (
                            <Text variant="body-default-xs" onBackground="neutral-weak">
                              {institution.address}
                            </Text>
                          )}
                        </Column>
                      </Flex>
                      {institution.duration && (
                        <Text 
                          variant="heading-default-xs" 
                          onBackground="neutral-weak"
                          style={{
                          whiteSpace: "nowrap",
                          fontSize: "12px", 
                        }}>
                          {institution.duration}
                        </Text>
                      )}
                    </Flex>

                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="20"
              >
                {about.technical.title}
              </Heading>
              <Flex fillWidth gap="12" wrap>
                {about.technical.skills[0].images.map((image, index) => (
                  <a
                    key={index}
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={image.alt} // Tooltip on hover
                  >
                    <Flex
                      radius="m"
                      minWidth={image.width}
                      height={image.height}
                    >
                      <Media
                        radius="m"
                        sizes={image.width.toString()}
                        alt={image.alt}
                        src={image.src}
                      />
                    </Flex>
                  </a>
                ))}
              </Flex>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
