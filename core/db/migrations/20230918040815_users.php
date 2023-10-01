<?php
declare(strict_types=1);

use Illuminate\Database\Schema\Blueprint;
use Vesp\Services\Migration;

final class Users extends Migration
{
    public function up(): void
    {
        $this->schema->create(
            'user_roles',
            static function (Blueprint $table) {
                $table->id();
                $table->string('title')->unique();
                $table->json('scope')->nullable();
                $table->timestamps();
            }
        );

        $this->schema->create(
            'users',
            static function (Blueprint $table) {
                $table->id();
                $table->foreignId('role_id')
                    ->constrained('user_roles')->cascadeOnDelete();
                $table->foreignId('avatar_id')->nullable()
                    ->constrained('files')->nullOnDelete();
                $table->string('username')->unique();
                $table->string('password');
                $table->string('fullname')->nullable();
                $table->string('email')->nullable();
                $table->string('phone', 20)->nullable();
                $table->boolean('active')->default(true);
                $table->boolean('blocked')->default(false);
                $table->string('reset_password')->nullable();
                $table->timestamp('reset_at')->nullable();
                $table->timestamps();
                $table->timestamp('active_at')->nullable();

                $table->index(['active', 'blocked']);
            }
        );

        $this->schema->create(
            'user_tokens',
            static function (Blueprint $table) {
                $table->string('token')->primary();
                $table->foreignId('user_id')
                    ->constrained('users')->cascadeOnDelete();
                $table->timestamp('valid_till')->index();
                $table->string('ip', 16)->nullable();
                $table->boolean('active')->default(true);
                $table->timestamps();

                $table->index(['token', 'user_id', 'active']);
            }
        );

    }

    public function down(): void
    {
        $this->schema->drop('user_tokens');
        $this->schema->drop('users');
        $this->schema->drop('user_roles');
    }
}
