# Generated by Django 4.1.6 on 2023-03-04 21:12

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
    ]

    operations = [
        migrations.CreateModel(
            name="PlayUser",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("password", models.CharField(max_length=128, verbose_name="password")),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                (
                    "is_superuser",
                    models.BooleanField(
                        default=False,
                        help_text="Designates that this user has all permissions without explicitly assigning them.",
                        verbose_name="superuser status",
                    ),
                ),
                ("email", models.EmailField(max_length=150, unique=True)),
                ("first_name", models.CharField(max_length=50)),
                ("last_name", models.CharField(max_length=50)),
                (
                    "avatar",
                    models.ImageField(blank=True, null=True, upload_to="user_avatars/"),
                ),
                ("city", models.CharField(max_length=50)),
                ("country", models.CharField(max_length=50)),
                (
                    "age",
                    models.CharField(
                        blank=True,
                        max_length=10,
                        null=True,
                        validators=[django.core.validators.RegexValidator("[1-100]")],
                    ),
                ),
                ("is_staff", models.BooleanField(default=False)),
                ("is_active", models.BooleanField(default=True)),
                (
                    "grade",
                    models.CharField(
                        blank=True,
                        max_length=10,
                        null=True,
                        validators=[
                            django.core.validators.RegexValidator(
                                "^[1-9]?$|^10$|^11$|^12$"
                            )
                        ],
                    ),
                ),
                ("school", models.CharField(blank=True, max_length=150, null=True)),
                (
                    "homeroom_id",
                    models.CharField(blank=True, max_length=150, null=True),
                ),
                (
                    "type",
                    models.CharField(
                        blank=True,
                        choices=[("student", "student"), ("teacher", "teacher")],
                        max_length=150,
                        null=True,
                    ),
                ),
                (
                    "groups",
                    models.ManyToManyField(
                        blank=True,
                        help_text="The groups this user belongs to. A user will get all permissions granted to each of their groups.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.group",
                        verbose_name="groups",
                    ),
                ),
                (
                    "user_permissions",
                    models.ManyToManyField(
                        blank=True,
                        help_text="Specific permissions for this user.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.permission",
                        verbose_name="user permissions",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]